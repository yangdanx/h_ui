// 目前支持的键值集合
const keyInfo = {
  Esc: {
    code: "Escape",
    which: 27,
    keyCode: 27
  },
  Enter: {
    code: "Enter",
    which: 13,
    keyCode: 13
  },
  Space: {
    code: "Space",
    which: 32,
    keyCode: 32
  },
  Up: {
    code: "ArrowUp",
    which: 38,
    keyCode: 38
  },
  Right: {
    code: "ArrowRight",
    which: 39,
    keyCode: 39
  },
  Down: {
    code: "ArrowDown",
    which: 40,
    keyCode: 40
  },
  Left: {
    code: "ArrowLeft",
    which: 37,
    keyCode: 37
  }
};

/**
 * @description 校验触发键盘事件的按键是否与某个键值相匹配
 * @param event {KeyboardEvent} 键盘事件对象
 * @param key {String} 指定的键值
 * @example isKeyMatch(event, "Enter")
 * @author yangyc21550@hundsun.com
 */
function isKeyMatch(event, key) {
  if (key && typeof key === "string" && typeof keyInfo[key] !== "undefined") {
    if ((event["code"] && event["code"] === keyInfo[key]["code"]) || (event["which"] && event["which"] === keyInfo[key]["which"]) || (event["keyCode"] && event["keyCode"] === keyInfo[key]["keyCode"])) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

export default isKeyMatch;
