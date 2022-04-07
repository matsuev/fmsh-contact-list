import { defineStore } from 'pinia'
import { Contact } from '../dataset/contacts'

const byName = (a, b) => a.name > b.name ? 1 : -1
const faworite = (contact) => contact.faworite

export const useContacts = defineStore({
  id: 'contacts',

  state: () => ({
    list: JSON.parse(localStorage.getItem('contactList')),
    nextId: localStorage.getItem('nextId'),
  }),
  
  getters: {
    getList: (state) => state.list.sort(byName),
    getFaworiteList: (state) => state.list.filter(faworite).sort(byName),
  },
  
  actions: {

    update(contact) {
      let contId = this.list.findIndex((item) => item.id == contact.id)
      if (contId == -1) {
        contact.id = this.nextId++
        this.list.push(contact)
      }
      else {
        this.list[contId] = contact;
      }
      this.syncStorage();
    },
  
    delete(contact) {
      let idx = this.list.findIndex((item) => item.id == contact.id)
      this.list.splice(idx, 1)
      this.syncStorage();
    },
  
    newContact() {
      return new Contact()
    },
  
    syncStorage() {
      localStorage.setItem('nextId', this.nextId)
      localStorage.setItem('contactList', JSON.stringify(this.list))
    }

  }
})

