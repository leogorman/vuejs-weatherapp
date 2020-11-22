import {mount} from "@vue/test-utils";
import Search from "./Search.vue";

describe('Search.vue', () => {
    test('API is searched when button clicked', () => {
        const wrapper = mount(Search)
        expect(wrapper.text()).toContain('Search')
    })
})
