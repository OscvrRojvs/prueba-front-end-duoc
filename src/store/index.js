import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from '../router/index'
Vue.use(Vuex)

const instance = Axios.create({
  baseURL: 'http://157.230.190.251/',
  headers: { 'Content-Type': 'application/json' }
})

export default new Vuex.Store({
  state: {
    kpis: [
      {
        nombre: "",
        entregadas: "",
        pendientes: ""
      },
      {
        nombre: "",
        totales: "",
        atrasadas: ""
      }
    ],
    ultimas_devoluciones: [],
    ultimas_ordenes: [],
    monitor_ordenes: [],
    cliente: {},
    orden: {},
    productos: []
  },
  mutations: {
    KPIS(state, data) {
      state.kpis = data
    },
    ULTIMAS_DEVOLUCIONES(state, data) {
      state.ultimas_devoluciones = data
    },
    ULTIMAS_ORDENES(state, data) {
      state.ultimas_ordenes = data
    },
    MONITOR_ORDENES(state, data) {
      state.monitor_ordenes = data
    },
    CLIENTES(state, data) {
      state.cliente = data
    },
    ORDEN(state, data) {
      state.orden = data
    },
    PRODUCTOS(state, data) {
      state.productos = data
    },
  },
  actions: {
    actionPostLogIn({ }, payload) {
      let params = payload
      const postLogIn = instance.post('api/v1/cmodels/users/login')
      postLogIn.then(res => {
        if (res.data.username === params.email && res.data.id === params.password) {
          localStorage.setItem('token', res.data.token)
          router.push('/home')
        } else alert('crendeciales incorrectas')
      })
    },
    actionGetDashboard({ commit }) {
      const getDashboard = instance.get('api/v1/cmodels/secure/dashboard')
      getDashboard.then(res => {
        commit('KPIS', res.data.kpis)
        commit('ULTIMAS_DEVOLUCIONES', res.data['ultimas_devoluciones:'])
        commit('ULTIMAS_ORDENES', res.data.utimas_ordenes)
      })
    },
    actionGetMonitorOrdenes({ commit }) {
      const getMonitorOrdenes = instance.get('api/v1/cmodels/secure/ordenes?oficina=&estado&fecha-ini=&fecha-fin=&page=1&size=10')
      getMonitorOrdenes.then(res => {
        commit('MONITOR_ORDENES', res.data['ordenes:'])
      })
    },
    actionGetDetalleOrden({ commit }) {
      const getDetalleOrden = instance.get('/api/v1/cmodels/secure/ordenes/12345')
      getDetalleOrden.then(res => {
        commit('CLIENTES', res.data.cliente)
        commit('ORDEN', res.data.orden)
        commit('PRODUCTOS', res.data.productos)
      })
    }
  },
  modules: {
  }
})
