/**
 * SinglyLinkedList类，代表一个双向链表.
 * @constructor
 */

function Dblclick(){
  function node(data){
    this.data=data;
    this.next=null;
    this.parent = null;
  }
  this.header = null;
  this.length = 0;
  this.tail = null;
   /**
     * 添加数据
     * @param data {any} 数据 
     */
    Dblclick.prototype.append = function (data) {
      let nodeList = new node(data);
      if (this.length === 0) {
        this.header = nodeList;
        nodeList.parent = this.header;
        this.tail = nodeList;
      } else {
        var curroud = this.header;
        while (curroud.next) {
          curroud = curroud.next;
        }
        curroud.next = nodeList;
        nodeList.parent = curroud;
        this.tail = nodeList;
      }
      this.length++;
    }
  /**
   * 插入数据
   * @param {number} index 索引 
   * @param {any} data 数据
   */
  Dblclick.prototype.inster = function (index, data) {
    if (index < 0 || index > this.length) return false
    let nodeList = new node(data);
    if (this.length === 0) {
      this.header = nodeList;
      this.tail = nodeList;
    } else {
      if (this.length === index) {
        this.tail.next = nodeList;
        nodeList.parent = this.tail;
        this.tail = nodeList;
      } else {
        if (index === 0) {
          this.header.parent = nodeList;
          nodeList.next = this.header;
          this.header = nodeList;
        } else {
          var curroud = this.header;
          var num = 0, previous = null;
          while (num < index) {
            previous = curroud;
            curroud = curroud.next;
            num++;
          }
          previous.next = nodeList;
          nodeList.parent = previous;
          nodeList.next = curroud;
          curroud.parent = nodeList;
        }
      }
    }
    this.length++;
  }
  //修改数据
  /**
   * 修改数据
   * @param {number} index 索引 
   * @param {any} data 数据
   */
  Dblclick.prototype.updated = function (index, data) {
    if (index < 0 || index >= this.length) return false
    var curroud = this.header;
    var num = 0;
    while (num < index) {
      curroud = curroud.next;
      num++;
    }
    curroud.data = data;
  }
  /**
   * 获取数据
   * @param {number} index 索引 
   */
  Dblclick.prototype.get = function (index) {
    if (index < 0 || index >= this.length) return false
    var num = 0, curroud = this.header;
    while (num++ < index) {
      curroud = curroud.next
    }
    return curroud.data
  }
  /**
   * @method indexOf 根据数据查找索引
   * @param {any} data 查找的数据
   */
  Dblclick.prototype.indexOf = function (data) {
    var num = 0, curroud = this.header;
    while (curroud) {
      if (curroud.data === data) {
        return num
      }
      curroud = curroud.next;
      num++;
    }
    return -1
  }
  /**
   * 根据索引删除数据
   * @param {number} index 索引 
   */
  Dblclick.prototype.removeAt = function (index) {
    if (index < 0 || index >= this.length) return false
    var num = 0, curroud = this.header, previous = null;
    if (index === 0) {
      this.header = this.header.next;
      this.header.next.parent = this.header;
      this.length--;
      return true;
    } else {
      while (curroud) {
        if (num === index) {
          previous.next = curroud.next;
          curroud.next.parent = previous;
          this.length--;
          return true;
        }
        previous = curroud;
        curroud = curroud.next;
        num++;
      }
    }
  }
  /**
   * 根据数据删除元素
   * @param {any} data 数据 
   */
  Dblclick.prototype.remove = function (data) {
    var index = this.indexOf(data);
    if (index === -1) {
      return false
    } else {
      return this.removeAt(index)
    }
  }
  /**
   * 返回链表是否为空
   */
  Dblclick.prototype.isEmpty = function () {
    return this.length > 0 ? false : true
  }
  /** 
  *返回链表的元素个数
  */
 Dblclick.prototype.size = function () {
  return this.length
}
  /**
   * 转换为字符串
   */
  Dblclick.prototype.toString=function(){
    var str='',curroud=this.header;
    while (curroud) {
      str+=curroud.data+','
      curroud=curroud.next
    }
    return str.slice(0,-1);
  }
  /**
   * 清空链表
   */
  Dblclick.prototype.clear=function(){
    this.header = null;
    this.tail = null;
    this.length = 0;
  }
}