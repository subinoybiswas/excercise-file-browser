import { FolderStructure } from "@/types/Structure";

export const folderStructure: FolderStructure = [
    {
      type: "folder",
      name: "Projects",
      path: "/Projects",
      children: [
        {
          type: "folder",
          name: "Web Development",
          path: "/Projects/Web Development",
          children: [
            { type: "file", name: "index.html", path: "/Projects/Web Development/index.html" },
            { type: "file", name: "styles.css", path: "/Projects/Web Development/styles.css" },
            {
              type: "folder",
              name: "JavaScript",
              path: "/Projects/Web Development/JavaScript",
              children: [
                { type: "file", name: "app.js", path: "/Projects/Web Development/JavaScript/app.js" },
                { type: "file", name: "utils.js", path: "/Projects/Web Development/JavaScript/utils.js" }
              ]
            }
          ]
        },
        {
          type: "folder",
          name: "Mobile Apps",
          path: "/Projects/Mobile Apps",
          children: [
            { type: "file", name: "AppDesign.png", path: "/Projects/Mobile Apps/AppDesign.png" },
            { type: "file", name: "README.md", path: "/Projects/Mobile Apps/README.md" }
          ]
        }
      ]
    },
    {
      type: "folder",
      name: "Research",
      path: "/Research",
      children: [
        {
          type: "folder",
          name: "Machine Learning",
          path: "/Research/Machine Learning",
          children: [
            { type: "file", name: "ml_model.py", path: "/Research/Machine Learning/ml_model.py" },
            { type: "file", name: "data_analysis.ipynb", path: "/Research/Machine Learning/data_analysis.ipynb" },
            {
              type: "folder",
              name: "Datasets",
              path: "/Research/Machine Learning/Datasets",
              children: [
                { type: "file", name: "training_data.csv", path: "/Research/Machine Learning/Datasets/training_data.csv" },
                { type: "file", name: "test_data.csv", path: "/Research/Machine Learning/Datasets/test_data.csv" }
              ]
            }
          ]
        },
        {
          type: "folder",
          name: "Physics Experiments",
          path: "/Research/Physics Experiments",
          children: [
            { type: "file", name: "experiment1.docx", path: "/Research/Physics Experiments/experiment1.docx" },
            { type: "file", name: "experiment2.docx", path: "/Research/Physics Experiments/experiment2.docx" }
          ]
        }
      ]
    },
    { type: "file", name: "PersonalNotes.txt", path: "/PersonalNotes.txt" },
    {
      type: "folder",
      name: "Backups",
      path: "/Backups",
      children: [
        {
          type: "folder",
          name: "2023",
          path: "/Backups/2023",
          children: [
            { type: "file", name: "backup_jan.zip", path: "/Backups/2023/backup_jan.zip" },
            { type: "file", name: "backup_feb.zip", path: "/Backups/2023/backup_feb.zip" }
          ]
        },
        {
          type: "folder",
          name: "2024",
          path: "/Backups/2024",
          children: [
            { type: "file", name: "backup_mar.zip", path: "/Backups/2024/backup_mar.zip" },
            { type: "file", name: "backup_apr.zip", path: "/Backups/2024/backup_apr.zip" }
          ]
        }
      ]
    }
  ];