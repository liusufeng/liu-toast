/*
 * @Author: liusufeng
 * @Date: 2020-09-02 11:17:04
 * @LastEditTime: 2020-09-02 11:32:38
 * @LastEditors: liusufeng
 * @Description: 基于H5端的Toast实现
 */

 /**
  * @description: 显示toast提示
  * @param {String} title 提示信息
  * @param {Boolean} mask 是否使用遮罩
  * @param {Number} duration 显示时长ms
  */
 function showToast(title, mask = true, duration = 1500) {
    if(!title)  return false

    let toastList = document.getElementsByClassName('liu-toast')
    for(let i = 0; i < toastList.length; i++) {
        toastList[i].remove()
    }
    let toastHtml = document.createElement('div')
    toastHtml.className = 'liu-toast'
    if(mask) {
        toastHtml.style = 'position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; opacity: 0; transition: opacity .2s;'
    }
    let toast = document.createElement('div')
    toast.style = 'position: absolute; left: 50%; bottom: 15%; transform: translateX(-50%); min-height: 32px; line-height: 18px; background-color: rgba(0, 0, 0, 0.6); padding: 7px 10px; color: #fff; font-size: 12px; text-align: center; border-radius: 6px; box-sizing: border-box;'
    let toastText = document.createElement('div')
    toastText.style = 'text-overflow: -o-ellipsis-lastline; overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 4; line-clamp: 4; -webkit-box-orient: vertical;'
    let text = document.createTextNode(title);
    toastText.appendChild(text);
    toast.appendChild(toastText)
    toastHtml.appendChild(toast)
    document.body.appendChild(toastHtml)
    setTimeout(() => {
        toastHtml.style.opacity = 1
    });
    setTimeout(() => {
        toastHtml.style.opacity = 0
        setTimeout(() => {
            toastHtml.remove()
        }, 200);
    }, duration);
}
