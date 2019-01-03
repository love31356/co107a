class quene {
    constructor() {
        this.a = []
    }

    enquene (en) {
        this.a.unshift(en)
    }

    dequene () {
        return this.a.pop()
    }
}

var s = new quene()
s.enquene(2)
console.log("s=%j",s)
s.enquene(4)
console.log("s=%j",s)

s.dequene()
console.log("s=%j",s)