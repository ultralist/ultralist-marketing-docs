const Ultralist = {
  //8      [ ]     tomorrow        +devops have

  format: (id, due, subject) => {
    let ret = ""

    ret += `<span class="base0A">${Ultralist.addSpaces(id.toString(), 7)}</span>`
    ret += Ultralist.addSpaces("[ ]", 8)
    ret += `<span class="base0D">${Ultralist.addSpaces(due, 16)}</span>`
    ret += Ultralist.formatSubject(subject)

    return ret
  },

  formatCompleted: (id, due, subject) => {
    let ret = ""

    ret += `<span class="base0A">${Ultralist.addSpaces(id.toString(), 7)}</span>`
    ret += Ultralist.addSpaces("[x]", 8)
    ret += `<span class="base0D">${Ultralist.addSpaces(due, 16)}</span>`
    ret += Ultralist.formatSubject(subject)

    return ret
  },

  formatOverdue: (id, due, subject) => {
    let ret = ""

    ret += `<span class="base0A">${Ultralist.addSpaces(id.toString(), 7)}</span>`
    ret += Ultralist.addSpaces("[ ]", 8)
    ret += `<span class="base08">${Ultralist.addSpaces(due, 16)}</span>`
    ret += Ultralist.formatSubject(subject)

    return ret
  },

  formatHeading: (heading) =>  {
    return `<br /><span class="base0C">${heading}</span>`
  },

  addSpaces(str, numSpaces) {
    for(let x = str.length; x < numSpaces; x++) {
      str = str + "&nbsp;"
    }
    return str
  },

  formatSubject(subject) {
    return subject.split(" ").map(word => {
      if (Ultralist.isContext(word)) {
        return `<span class="base08">${word}</span>`
      }
      if (Ultralist.isProject(word)) {
        return `<span class="base0E">${word}</span>`
      }
      return word
    }).join(" ")
  },

  isProject(word) {
    return word.startsWith("+")
  },

  isContext(word) {
    return word.startsWith("@")
  }
}
