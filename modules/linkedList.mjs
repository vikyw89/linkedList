import { Node } from "./node.mjs"

class LinkedList {
    static HEAD = new Node({ value:null, next:null})

    static append = (value) => {
        let pointer = this.HEAD

        // traversing the node
        if (pointer.value === null && pointer.next === null) {
            this.HEAD = new Node ({ value:value })
        } else {
            while (pointer.next !== null) {
                pointer = pointer.next
            }
            pointer.next = new Node ({ value:value })
        }
    }
    
    static prepend = (value) => {
        let pointer = this.HEAD
        this.HEAD = new Node({ value:value, next:pointer})
    }

    static size = () => {
        let pointer = this.HEAD
        let count = 0
        if (pointer.value) {
            count++
        }
        while (pointer.next !== null) {
            count++
            pointer = pointer.next
        }
        return count
    }

    static head = () => {
        return this.HEAD
    }

    static tail = () => {
        let pointer = this.HEAD
        while (pointer.next !== null) {
            pointer = pointer.next
        }
        return pointer
    }

    static at = (index) => {
        let pointer = this.HEAD
        for (let i = 0; i < index; i++) {
            pointer = pointer.next
            if (!pointer.next) {
                return null
            }
        }
        if (pointer) {
            return pointer
        }
    }

    static pop = () => {
        let pointer = this.HEAD
        if (pointer.next === null) {
            pointer.value = null
            return
        }
        while (pointer.next.next !== null) {
            pointer = pointer.next
        }
        pointer.next = null
    }

    static contains = (value) => {
        let pointer = this.HEAD
        while (pointer !== null) {
            if (pointer.value === value) {
                return true
            } 
            pointer = pointer.next
        }
        return false
    }

    static find = (value) =>{
        let pointer = this.HEAD
        let index = 0
        while (pointer !== null) {
            if (pointer.value === value) {
                return index
            } else if (pointer.next === null) {
                return null
            }
            pointer = pointer.next
            index++
        }
    }

    static toString = () => {
        // pointer
        let pointer = this.HEAD
        // container for printing result
        let result = []
        // iterate through the node till the end
        while (pointer !== null) {
            result.push(`( ${pointer.value} )`)
            pointer = pointer.next
        }
        result.push(`null`)
        return result.join(' -> ')
    }

    static insertAt = (value, index)=> {
        let newNode = new Node({ value:value, next:null })
        // get newNode.next to node at index
        newNode.next = this.at(index)
        // get existing node at index-1 to newNode
        if (index === 0) {
            this.HEAD = newNode
        } else {
            this.at(index-1).next = newNode
        }
    }

    static removeAt = (index) => {
        // get node at index - 1 to point at node index + 1
        if (index === 0) {
            this.HEAD = this.at(1)
            return
        } else {
            this.at(index - 1).next = this.at(index + 1)
        }
    }
}

export { LinkedList }