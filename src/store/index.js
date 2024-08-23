import { createStore } from 'vuex'
import axios from 'axios'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import router from '@/router'
// import { useCookies } from 'vue3-cookies'
// const { cookies } = useCookies()
// Should you reload the page after logging in
// applyToken(cookies.get('LegitUser')?.token)

const apiURL = 'https://fullstack-2-hi8c.onrender.com/'

export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    recentProducts: null

  },
  getters: { 
  },
  mutations: {
    setUsers(state, payload) {
      state.users = payload
    },
    setUser(state, payload) {
      state.user = payload
    },
    setProducts(state, payload) {
      state.products = payload
    },
    setProduct(state, payload) {
      state.product = payload
    },
    setRecentProducts(state, payload) {
      state.recentProducts = payload
    }

  },
  actions: {
    // ==== User ========
    async fetchUsers(context) {
      try {
        const { results, msg } = await (await axios.get(`${apiURL}user`)).data
        if (results) {
          context.commit('setUsers', results)
        } else {
          toast.error(`${msg}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    },
    async fetchUser(context, id) {
      try {
        const { result, msg } = await (await axios.get(`${apiURL}user/${id}`)).data
        if (result) {
          context.commit('setUser', result)
        } else {
          toast.error(`${msg}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    },
    async register(context, payload) {
      try {
        const { msg, err, token } = await (await axios.post(`${apiURL}user/register`, payload)).data
        if (token) {
          context.dispatch('fetchUsers')
          toast.success(`${msg}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })
          // router.push({ name: 'login' })
        } else {
          toast.error(`${err}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    },
    async updateUser(context, payload) {
      try {
        const { msg, err } = await (await axios.patch(`${apiURL}user/${payload.userID}`, payload)).data
        if (msg) {
          context.dispatch('fetchUsers')
        } else {
          toast.error(`${err}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    },
    async deleteUser(context, id) {
      try {
        const { msg, err } = await (await axios.delete(`${apiURL}user/${id}`)).data
        if (msg) {
          context.dispatch('fetchUsers')
        } else {
          toast.error(`${err}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    },
    // ===== LOGIN =======
    async login(context, payload) {
      try {
        const { msg, result, token } = await (await axios.post(`${apiURL}user/login`, payload)).data

        if (result) {
          toast.success(`${msg}😎`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })
          context.commit('setUser', {
            msg,
            result
          })
          // cookies.set('LegitUser', { token, msg, result })
          // applyToken(token)
          // router.push({ name: 'products' })
        } else {
          toast.error(`${msg}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    },

    // ==== Product =====

    async getProducts({commit}) {
      let {data} = await axios.get(`${apiURL}products`)
      console.log(data);
      commit('setProducts', data)
    },

    async getProduct({commit},id) {
      let {data} = await axios.get(`${apiURL}products/${id}`)
      console.log(data)
      commit('setProduct', data)
    },

    async fetchProducts({ commit }) {
      try {
        const response = await axios.get(`${apiURL}products`)
        commit('setProducts', response.data)
        let recent = response.data.filter(item => item.prodID  <3)
        commit('setRecentProducts',recent)
      } catch (error) {
        toast.error(`${error.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }

    },
    // async recentProducts(context) {
    //   try {
    //     const { results, msg } = await (await axios.get(`${apiURL}product/recent`)).data
    //     if (results) {
    //       context.commit('setRecentProducts', results)
    //     } else {
    //       toast.error(`${msg}`, {
    //         autoClose: 2000,
    //         position: toast.POSITION.BOTTOM_CENTER
    //       })
    //     }
    //   } catch (e) {
    //     toast.error(`${e.message}`, {
    //       autoClose: 2000,
    //       position: toast.POSITION.BOTTOM_CENTER
    //     })
    //   }
    // },
    // async fetchProduct(context, id) {
    //   try {
    //     const { result, msg } = await (await axios.get(`${apiURL}product/${id}`)).data
    //     if (result) {
    //       context.commit('setProduct', result)
    //     } else {
    //       toast.error(`${msg}`, {
    //         autoClose: 2000,
    //         position: toast.POSITION.BOTTOM_CENTER
    //       })
    //     }
    //   } catch (e) {
    //     toast.error(`${e.message}`, {
    //       autoClose: 2000,
    //       position: toast.POSITION.BOTTOM_CENTER
    //     })
    //   }
    // },
    // async addAProduct(context, payload) {
    //   try {
    //     const { msg } = await (await axios.post(`${apiURL}product/add`, payload)).data
    //     if (msg) {
    //       context.dispatch('fetchProducts')
    //       toast.success(`${msg}`, {
    //         autoClose: 2000,
    //         position: toast.POSITION.BOTTOM_CENTER
    //       })
    //     }
    //   } catch (e) {
    //     toast.error(`${e.message}`, {
    //       autoClose: 2000,
    //       position: toast.POSITION.BOTTOM_CENTER
    //     })
    //   }
    // },
    // async updateProduct(context, payload) {
    //   try {
    //     const { msg } = await (await axios.patch(`${apiURL}product/${payload.productID}`, payload)).data
    //     if (msg) {
    //       context.dispatch('fetchProducts')
    //       toast.success(`${msg}`, {
    //         autoClose: 2000,
    //         position: toast.POSITION.BOTTOM_CENTER
    //       })
    //     }
    //   } catch (e) {
    //     toast.error(`${e.message}`, {
    //       autoClose: 2000,
    //       position: toast.POSITION.BOTTOM_CENTER
    //     })
    //   }
    // },
    // async deleteProduct(context, id) {
    //   try {
    //     const { msg } = await (await axios.delete(`${apiURL}product/${id}`)).data
    //     if (msg) {
    //       context.dispatch('fetchProducts')
    //       toast.success(`${msg}`, {
    //         autoClose: 2000,
    //         position: toast.POSITION.BOTTOM_CENTER
    //       })
    //     }
    //   } catch (e) {
    //     toast.error(`${e.message}`, {
    //       autoClose: 2000,
    //       position: toast.POSITION.BOTTOM_CENTER
    //     })
    //   }
    // }
  
  },
  modules: {
  }
})

