import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';

describe('Comment Box', () => {
	let component;
	beforeEach(() => {
		component = renderComponent(CommentBox);
	});

	it('has class \'comment-box\'',  () => {
		expect(component).to.have.class('comment-box');
	});

	it('has a text area', () => {
		expect(component.find('textarea')).to.exist;
	});

	it('has a button', () => {
		expect(component.find('button')).to.exist;
	});

	describe('entering text', ()=> {
		let testText;
		// let textarea;

		beforeEach(() => {
			testText = 'new comment';
			// textarea = component.find('textarea');
			component.find('textarea').simulate('change', testText);
		});

		it('shows text that has been entered', () => {
			expect(component.find('textarea')).to.have.value(testText);
		});

		it('clears when submitted', () => {
			component.simulate('submit');
			expect(component.find('textarea')).to.have.value('');
		});

		it('does not submit when empty', () => {
			expect(component.find('textarea')).to.not.have.value('');
			component.simulate('submit');
		});
	});
});