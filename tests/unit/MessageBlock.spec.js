import { shallowMount } from '@vue/test-utils'
import MessageBlock from '@/components/MessageBlock.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(MessageBlock, {
      propsData: { msg: "Hello Friends" }
    })
    expect(wrapper.text()).toContain("Hello Friends")
  })
})
