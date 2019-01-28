Stack = () => {
    this.dataStore = [] // 存储栈元素
}

Stack.prototype = {
    constructor: Stack,
    push: (element) => {
        this.dataStore.push(element)
    },
    pop: () => {
        return this.dataStore.pop()
    },
    peek: () => { //查看栈顶元素
        return this.dataStore[this.dataStore.length - 1]
    },
    clear: () => {
        this.dataStore = []
    }
}