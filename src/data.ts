import { firestore } from "./firebase";

export interface IProject {
  id: string;
  name: string;
  images: string[];
  description: string;
}

const getProjects = async () => {
  try {
    let projects: IProject[] = [];
    let items = await firestore.collection("projects").get();

    items.forEach((project) => {
      if (project.exists) {
        let p: IProject = project.data() as IProject;
        p.id = project.id;
        projects = [...projects, p];
      }
    });
    return projects;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export { getProjects };
