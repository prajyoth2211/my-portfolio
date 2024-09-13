document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        {
            title: 'Sr. Front-End Engineer Apple',
            duration: 'Jul 2022 - Present',
            description: `
                <ul>
                    <li>Developed internal applications with Angular 12 & 15 for limited user access.</li>
                    <li>Created dashboards to display Apple Products Supply Chain.</li>
                    <li>Worked with third-party libraries like AG-Grids and Highcharts.</li>
                    <li>Coordinated with offshore teams to meet project requirements and deadlines.</li>
                    <li>Led the Front-end team for 2 different applications in the supply chain industry.</li>
                    <li>Built Angular applications using Angular 15 and 13.</li>
                    <li>Integrated a Single-Page Web Application that recently went live.</li>
                    <li>Built layouts according to customer parameters using HTML5 and CSS3.</li>
                    <li>Directed design, writing, and production of page content to meet project demands.</li>
                    <li>Implemented improvements to boost site performance.</li>
                    <li>Contributed to best practices to drive the software development lifecycle.</li>
                    <li>Implemented Angular Router Module for SPA, enhancing application performance with reusable Angular components.</li>
                </ul>
            `
        },
        {
            title: 'Sr. UI/Web Developer Kaiser Permanente',
            duration: 'Jan 2021 - Jun 2022',
            description: `
                <ul>
                    <li>Developed and customized CMS platforms using React.js.</li>
                    <li>Implemented role-based access control (RBAC) in React.js applications.</li>
                    <li>Developed custom reusable Angular 10 components.</li>
                    <li>Built responsive web applications with Angular 9/8.</li>
                    <li>Created TypeScript reusable components and services to consume REST APIs.</li>
                </ul>
            `
        },
        {
            title: 'Sr. UI/Web Developer CooperVision',
            duration: 'May 2020 - Oct 2020',
            description: `
                <ul>
                    <li>Designed and developed a responsive admin portal using Bootstrap.</li>
                    <li>Developed custom reusable Angular 9.0 components with internationalization.</li>
                    <li>Produced microservices API using Express.js built on Node.js.</li>
                    <li>Utilized primeNG components for various UI elements.</li>
                </ul>
            `
        },
        {
            title: 'Sr. UI/Web Developer American Express',
            duration: 'May 2019 - May 2020',
            description: `
                <ul>
                    <li>Migrated application from Polymer 1 to Polymer 3 using lit elements and TypeScript.</li>
                    <li>Created an employee hierarchy component using Polymer 3.</li>
                    <li>Developed Angular directives, services, and controllers for SPA.</li>
                    <li>Participated in fast-paced Agile development.</li>
                </ul>
            `
        },
        {
            title: 'Front End UI/Web Developer Accenture',
            duration: 'Feb 2017 - Jul 2018',
            description: `
                <ul>
                    <li>Enhanced legacy application with Angular 2 and TypeScript.</li>
                    <li>Developed REST API modules using Node.js.</li>
                    <li>Created responsive designs using HTML5, CSS3, and JQuery.</li>
                    <li>Implemented client-side interface with React.js.</li>
                </ul>
            `
        },
        {
            title: 'Java UI/Web Developer Zippr',
            duration: 'Jun 2015 - Jan 2017',
            description: `
                <ul>
                    <li>Developed application architecture based on MVC design pattern.</li>
                    <li>Built views for JSP pages using AJAX.</li>
                    <li>Utilized Hibernate for data access layer.</li>
                    <li>Created short URLs using Ionic framework and SASS.</li>
                </ul>
            `
        }
    ];

    const projectList = document.querySelector('.project-list');

    projects.forEach((project, index) => {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project');
        projectDiv.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.duration}</p>
            <button class="view-details" data-index="${index}">View Details</button>
        `;
        projectList.appendChild(projectDiv);
    });

    const dialog = document.getElementById('project-dialog');

    const viewDetailsButtons = document.querySelectorAll('.view-details');
    viewDetailsButtons.forEach(button => {
        button.addEventListener('click', () => {
            const index = button.getAttribute('data-index');
            const project = projects[index];
            document.getElementById('dialog-title').textContent = project.title;
            document.getElementById('dialog-duration').textContent = project.duration;
            document.getElementById('dialog-description').innerHTML = project.description;
            dialog.showModal();
        });
    });

    const closeButton = document.getElementById('close-dialog');
    closeButton.addEventListener('click', () => {
        dialog.close();
    });
});
