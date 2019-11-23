const fs = require('fs')
const ejs = require('ejs')

const template = fs.readFileSync('./blog/public/template.html', 'utf8')

// const r = ejs.render(template, {array: [1,2,3]})
// console.log(r)

function render(template, obj) {
    let head = 'let str = "";\r\n'
    head += 'with(arr) {\r\n'
    let content = 'str += `'
    tempStr = template.replace(/\<\%\=(.+?)\%\>/g, function() {
        return '${' + arguments[1] + '}'
    })
    content += tempStr.replace(/\<\%(.+?)\%\>/g, function() {
        return '`\r\n' + arguments[1] + '\r\n str+=`'
    })
    let tail = '`\r\n}\r\n return str;'

    const fn = new Function('arr', head + content + tail)
    return fn(obj)
}
const r = render(template, {array: [1,2,3]})
console.log(r)