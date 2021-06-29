/**
 * 字符串替换方法
 * @param {*} entitys 实体列表
 * @param {*} str 需要替换的原字符串
 * @returns 
 */
/*  调用示例
    cosnt entitys = {
        '&' : '&amp;',
        '<' : '&lt;',
        '>' : '&gt;',
        '"' : '&quot;',
        "'" : '&apos;'
    }
    const result = convert(entitys, 'a&b<c>d') // 输出：a&amp;b&lt;c&gt;d
*/

function convert(entitys, str) {
    var regexp = new RegExp ('('+Object.keys(entitys).join('|')+')','g');
    return str.replace(regexp,function(matched){
        return entitys[matched];
    });  
}

module.exports = {
    convert
}