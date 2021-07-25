import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sidebarMenu: {
      acardion: [
        {
          acardionTitle: 'Ремонт',
          acardionSubmenu: [{
            subList: "Ремонт квартир"
          }]
        },
        {
          acardionTitle: 'Строительство',
          acardionSubmenu: [{
            subList: "Строительство домов"
          }]
        },
        {
          acardionTitle: 'Ремонт домов',
          acardionSubmenu: [
            { subList: "Ремонт домов" },
            { subList: "Обмеры" },
            { subList: "Разработка дизайн- проекта" },
            { subList: "Рабочая документация" }
          ]

        },
        {
          acardionTitle: 'Проектирование',
          acardionSubmenu: [
            { subList: "Обмеры" },
            { subList: "Разработка дизайн- проекта" },
            { subList: "Рабочая документация" }
          ]
        },

      ],
      menuLink: [
        {
          linkTitle: 'О компании',
        },
        {
          linkTitle: "Реализованные проекты",
        },
        {
          linkTitle: "Контакты",
        }
      ]
    },
    mainPage: {
      slider: [
        {
          img: 'https://raw.githubusercontent.com/Yaric117web/IDEA-front/master/img/main/mainBaner.png',
          info: {
            logo: {
              href: '/'
            },
            title: 'Ремонт & строительство',
            subtitle: 'в Москве и Московской области',
            btn: {
              title: 'Рассчитать стоимость',
              href: null
            }
          },
          mask: false
        },
        {
          img: 'https://raw.githubusercontent.com/Yaric117web/IDEA-front/master/img/main/mainBaner.png',
          info: {
            logo: {
              href: '/'
            },
            title: 'Ремонт & строительство',
            subtitle: 'в Москве и Московской области',
            btn: {
              title: 'Рассчитать стоимость',
              href: "null"
            }
          },
          mask: true
        },
      ]
    }
  },
  mutations: {
  },
  actions: {
  },
  getters: {
    SIDEBAR_MENU_ACCORDION: state => {
      return state.sidebarMenu.acardion;
    },
    SIDEBAR_MENU_LINKS: state => {
      return state.sidebarMenu.menuLink;
    },
    MAIN_PAGE: state => {
      return state.mainPage;
    }
  }
})
