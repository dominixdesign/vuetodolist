import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Item from '@/components/Item.vue'

describe('Item.vue', () => {
  it('renders props when passed', () => {
    const title = 'testTitle'
    const wrapper = shallowMount(Item, {
      propsData: {
        title,
        id: 1,
        status: 1
      }
    })
    expect(wrapper.text()).to.include(title)
  })
})
