import {getAllProjects} from "@/actions/project";

const DashboardPage = async () => {
    const projects = await getAllProjects()

    return <div>DashboardPage</div>
}

export default DashboardPage