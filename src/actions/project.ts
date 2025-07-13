'use server'

import {onAuthenticateUser} from "@/actions/user";
import {client} from "@/lib/prisma";
import { redirect } from "next/navigation";

export async function getAllProjects() {
    try {
        const checkUser = await onAuthenticateUser()

        if (checkUser.status !== 200 || !checkUser.user) {
            return {status: 403, error: "User not found or not allowed to access this page"};
        }

        const projects = await client.project.findMany({
            where: {
                userId: checkUser.user.id,
                isDeleted: false
            },
            orderBy: {
                updatedAt: 'desc'
            }
        })

        if (projects.length === 0) {
            return {status: 404, error: "No projects found"};
        }

        return {status: 200, data: projects}
    } catch (error) {
        console.log('🔴 ERROR', error)
        return {status: 500, error: "Internal server error"}
    }
}

export async function getRecentProjects() {
    try {
        const checkUser = await onAuthenticateUser()
        if(checkUser.status !== 200 || !checkUser.user) {
            return {status: 403, error: "User not authenticated"}
        }

        const projects = await client.project.findMany({
            where: {
                userId: checkUser.user.id,
                isDeleted: false
            },
            orderBy: {
                updatedAt: 'desc'
            },
            take: 5
        })

        if(projects.length === 0) {
            return{status: 404, error: 'No recent projects available'}
        }

        return {status: 200, data: projects}
    } catch (error) {
        console.log('🔴 ERROR', error)
        return {status: 500, error: "Internal server error"}
    }
}