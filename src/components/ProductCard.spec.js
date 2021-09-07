import { mount } from '@vue/test-utils';
import ProductCard from './ProductCard'

describe('Testing native dom events', () => {

    test('is a vue instance', () => {
        const wrapper = mount(ProductCard, {
            propsData: {
                productList: [{ name: "urun1", price: 15 }]
            }
        })
        expect(wrapper.isVueInstance()).toBeTruthy();
    })

})
