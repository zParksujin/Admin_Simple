import { selector } from "recoil"
// import atom from "."

const userSelector = selector({
    key: "userSelector",
    get: ({get}) => ``,
    set:({get, set}, value) => {
    }
})

export default userSelector;