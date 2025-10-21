---
public: true
title: List board templates
repo: core-board-service
---
# GET /io/template
List the board templates grouped by category. These include global templates and templates created by your organization.


### Example Request
```
curl -X GET \
  https://myaccount.leankit.com/io/template' \
  -H 'Authorization: Basic base64encodedauth' \
```

### Example Successful Response

200 OK
```json
{
    "categories": [
        {
            "id": "1",
            "name": "Our Boards",
            "templates": [
                {
                    "id": "757431863",
                    "name": "single card template",
                    "description": "The description",
                    "isEnabled": true,
                    "isGlobal": false
                }
            ]
        },
        {
            "id": "12",
            "name": "Engineering Operations & Manufacturing Boards",
            "templates": [
                {
                    "id": "107",
                    "name": "Iterative Deming PDCA",
                    "description": "This example shows you can model a cyclical process within a Kanban board, using the classic Lean tool, PDCA (Plan-Do-Check-Act), also called \"The Deming Cycle\".",
                    "isEnabled": true,
                    "isGlobal": true
                }
            ]
        },
        {
            "id": "3",
            "name": "IT Operations Boards",
            "templates": [
                {
                    "id": "100",
                    "name": "Business Process Maintenance",
                    "description": "This example shows a board where flow is from left to right, and coarse-grained priority is ranked from top to bottom.  It provides excellent visibility into Time and Scope, but WIP limits are slightly more difficult to manage.   Based on a Kanban board design by Mattias Skarin (http://blog.crisp.se/mattiasskarin), used by permission.",
                    "isEnabled": true,
                    "isGlobal": true
                },
                {
                    "id": "110",
                    "name": "DevOps Workflow",
                    "description": "This example shows a board where Dev and Ops are managing their work in a joint view. Flow is from left to right and helps the Operations team initiate work based on collaboration with Dev. The teams are able to identify their expedited and standard flow of work. WIP limits are in place to ensure optimal output. It provides excellent visibility into the overall process of how a requirement goes from initiation to deployment. ",
                    "isEnabled": true,
                    "isGlobal": true
                },
                {
                    "id": "116",
                    "name": "Operations Daily Deliverables",
                    "description": "This example shows a board where the input method and category of work is being explicitly captured.  Flow is from left to right and helps the team identify their expedited and standard flow of work.  WIP limits are in place to ensure optimal output.  It provides excellent visibility into measuring planned vs unplanned work to determine process improvements and understanding trends.",
                    "isEnabled": true,
                    "isGlobal": true
                },
                {
                    "id": "132",
                    "name": "System Administration",
                    "description": "This example is for a System Administrator team supporting development and production environments. Items enter at the bottom \"New\" lane and flow upwards to \"Done\". Priority is from right to left, where \"Production\" items have the highest priority and the project-specific planned work has the lowest priority.   Based on a Kanban board design by Mattias Skarin (http://blog.crisp.se/mattiasskarin), used by permission. ",
                    "isEnabled": true,
                    "isGlobal": true
                }
            ]
        },
        {
            "id": "13",
            "name": "ITSM (IT Service Management) Boards",
            "templates": [
                {
                    "id": "102",
                    "name": "Change Authorization (Process & Team Activity)",
                    "description": "",
                    "isEnabled": true,
                    "isGlobal": true
                },
                {
                    "id": "101",
                    "name": "Change Authorization (Process Activity)",
                    "description": "",
                    "isEnabled": true,
                    "isGlobal": true
                },
                {
                    "id": "104",
                    "name": "Change Implementation (Process & Team Activity)",
                    "description": "",
                    "isEnabled": true,
                    "isGlobal": true
                },
                {
                    "id": "103",
                    "name": "Change Implementation (Process Activity)",
                    "description": "",
                    "isEnabled": true,
                    "isGlobal": true
                },
                {
                    "id": "112",
                    "name": "Incident Management (Process & Team Activity)",
                    "description": "",
                    "isEnabled": true,
                    "isGlobal": true
                },
                {
                    "id": "111",
                    "name": "Incident Management (Process Activity)",
                    "description": "",
                    "isEnabled": true,
                    "isGlobal": true
                },
                {
                    "id": "114",
                    "name": "Major Incident Management",
                    "description": "",
                    "isEnabled": true,
                    "isGlobal": true
                },
                {
                    "id": "115",
                    "name": "Network Team (Team Activity)",
                    "description": "",
                    "isEnabled": true,
                    "isGlobal": true
                },
                {
                    "id": "113",
                    "name": "Other ITSM Team (Team Activity)",
                    "description": "",
                    "isEnabled": true,
                    "isGlobal": true
                },
                {
                    "id": "119",
                    "name": "Problem Management (Process & Team Activity)",
                    "description": "",
                    "isEnabled": true,
                    "isGlobal": true
                },
                {
                    "id": "118",
                    "name": "Problem Management (Process Activity)",
                    "description": "",
                    "isEnabled": true,
                    "isGlobal": true
                },
                {
                    "id": "131",
                    "name": "Server Team (Team Activity)",
                    "description": "",
                    "isEnabled": true,
                    "isGlobal": true
                }
            ]
        },
        {
            "id": "0",
            "name": "Other Boards",
            "templates": [
                {
                    "id": "108",
                    "name": "Default Template",
                    "description": "This template represents a basic process flow of not started, started, finished.",
                    "isEnabled": true,
                    "isGlobal": true
                }
            ]
        },
        {
            "id": "11",
            "name": "SAFe (Scaled Agile Framework) Boards",
            "templates": [
                {
                    "id": "125",
                    "name": "SAFe Essential - Program Board",
                    "description": "SAFe Essential - Program Board",
                    "isEnabled": true,
                    "isGlobal": true
                },
                {
                    "id": "127",
                    "name": "SAFe Essential - Teams Board",
                    "description": "SAFe Essential - Teams Board",
                    "isEnabled": true,
                    "isGlobal": true
                },
                {
                    "id": "123",
                    "name": "SAFe Objectives Board",
                    "description": "SAFe Objectives Board",
                    "isEnabled": true,
                    "isGlobal": true
                },
                {
                    "id": "124",
                    "name": "SAFe Portfolio Board",
                    "description": "SAFe Portfolio Board",
                    "isEnabled": true,
                    "isGlobal": true
                },
                {
                    "id": "126",
                    "name": "SAFe Risks Board",
                    "description": "SAFe Risks Board",
                    "isEnabled": true,
                    "isGlobal": true
                },
                {
                    "id": "128",
                    "name": "SAFe Value Stream",
                    "description": "SAFe Value Stream",
                    "isEnabled": true,
                    "isGlobal": true
                }
            ]
        },
        {
            "id": "2",
            "name": "Software Development Boards",
            "templates": [
                {
                    "id": "106",
                    "name": "Complex Feature Delivery",
                    "description": "This example includes many of the advanced possibilities for board design in one large board. A categorized backlog, parallel feature development lanes, and a cyclical testing/rework process, as well as post-deployment and \"dogfooding\" activities, and a subdivided archive.  Classes of service have detailed policies defined.",
                    "isEnabled": true,
                    "isGlobal": true
                },
                {
                    "id": "109",
                    "name": "Development Flow",
                    "description": "One of several ways to design a board with an \"Expedite\" lane across the top of the board.",
                    "isEnabled": true,
                    "isGlobal": true
                },
                {
                    "id": "130",
                    "name": "Scrum Team Sprint",
                    "description": "A detailed example of how a team that is already practicing Scrum might introduce some features of Kanban into their process. Includes a detailed description of how to move items from product backlog to sprint backlog, use WIP limits for in-process work, and manage the sprint using a visual board.",
                    "isEnabled": true,
                    "isGlobal": true
                }
            ]
        },
        {
            "id": "10",
            "name": "Strategy and Execution Boards",
            "templates": [
                {
                    "id": "105",
                    "name": "Company Planning",
                    "description": "This template demonstrates a possible configuration for managing a portfolio of projects.",
                    "isEnabled": true,
                    "isGlobal": true
                },
                {
                    "id": "117",
                    "name": "Personal Kanban",
                    "description": "Example of a personal Kanban board for a fictional CEO",
                    "isEnabled": true,
                    "isGlobal": true
                },
                {
                    "id": "120",
                    "name": "Project Delivery",
                    "description": "This template demonstrates a possible configuration for managing a standard project.",
                    "isEnabled": true,
                    "isGlobal": true
                },
                {
                    "id": "121",
                    "name": "Project Portfolio",
                    "description": "This example shows many possibilities for lanes you might want on your Personal Kanban board. Includes a section for specific projects, goals, \"avoidance\", scheduled activities, and \"Daily Habits\"",
                    "isEnabled": true,
                    "isGlobal": true
                },
                {
                    "id": "122",
                    "name": "Project Strategy",
                    "description": "While \"Kanban\" is primarily about Flow and limiting WIP, you can also use LeanKit to visualize things that have little do to with Flow. In this Strategy Canvas example, you can see how you might use LeanKit to organize your thoughts and collaborate with others on a strategic level.",
                    "isEnabled": true,
                    "isGlobal": true
                },
                {
                    "id": "129",
                    "name": "Sales Pipeline",
                    "description": "Example of a sales pipeline visualization with separate swimlanes for region / sector sales teams, product / service card types, and account-size class of service",
                    "isEnabled": true,
                    "isGlobal": true
                },
                {
                    "id": "9",
                    "name": "Welcome To LeanKit!",
                    "description": "Click Here To Open This Board",
                    "isEnabled": true,
                    "isGlobal": true
                }
            ]
        }
    ]
}
```
