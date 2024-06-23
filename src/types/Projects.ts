import type { IProject } from '@/interfaces/IProject'
import type { UUID } from 'crypto';

export class Projects {
    public ProjectList: IProject[] = [];

    constructor(initialProjects: IProject[] = []) {
        this.ProjectList = initialProjects; // Initialize with an empty array or provided initial values
    }

    // Method to add a project to the list
    public addProject(project: IProject): void {
        this.ProjectList.push(project);
    }

    // Method to retrieve a project by its ID
    public getProject(id: UUID): IProject | undefined {
        return this.ProjectList.find(project => project.id === id);
    }

    // Method to update a project
    public updateProject(updatedProject: IProject): IProject | undefined {
        const index = this.ProjectList.findIndex(project => project.id === updatedProject.id);
        if (index !== -1) {
            this.ProjectList[index] = updatedProject;
        }

        return this.ProjectList.find(project => project.id === updatedProject.id)
    }

    // Method to delete a project
    public deleteProject(id: UUID): void {
        this.ProjectList = this.ProjectList.filter(project => project.id !== id);
    }
}