import { createRouter , createWebHistory } from "vue-router";

import Home from './pages/Home.vue';
import About from './pages/About.vue';
import Contacts from './pages/Contacts.vue';
import Projects from './pages/Projects.vue';
import ProjectDetail from './pages/ProjectDetail.vue';
import TypeProjects from './pages/TypeProjects.vue';
import Error404 from './pages/Error404.vue';
import TecnologiesProjects from "./pages/TecnologiesProjects.vue";

const router = createRouter({
  history: createWebHistory(),
  // linkExactActiveClass: 'active',
  routes :[
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/chi-siamo',
      name: 'about',
      component: About
    },
    {
      path: '/contatti',
      name: 'contacts',
      component: Contacts
    },
    {
      path: '/progetti',
      name: 'projects',
      component: Projects
    },
    {
      path: '/dettaglio-progetto/:slug',
      name: 'projectDetail',
      component: ProjectDetail
    },
    {
      path: '/type-projects/:slug',
      name: 'typeProjects',
      component: TypeProjects
    },
    {
      path: '/tecnologies-projects/:slug',
      name: 'tecnologiesProjects',
      component: TecnologiesProjects
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'error404',
      component: Error404
    }
  ]
})

export {router}