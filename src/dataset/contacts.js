const contactList = [
   {
      id: 1,
      name: 'Мацуев Александр',
      phone: '+7 (983) 154-72-54',
      faworite: false,
   },
   {
      id: 2,
      name: 'Иванов Иван',
      phone: '+7 (333) 222-33-22',
      faworite: true,
   },
]

if (!localStorage.getItem('contactList')) {
   localStorage.setItem('contactList', JSON.stringify(contactList))
}

if (!localStorage.getItem('nextId')) {
   localStorage.setItem('nextId', 3)
}

export const Contact = function () {
   this.id = undefined;
   this.name = "";
   this.phone = "";
}
