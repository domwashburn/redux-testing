import { renderComponent, expect } from '../test_helper';
import CommentList from '../../src/components/comment_list';

describe('Comment List', () => {
	let component;
	let props;

	beforeEach(() => {
		props = { comments: ['comment 1', 'comment 2', 'comment 3', 'comment 4'] };
		component = renderComponent(CommentList, null, props);
	});

	it('shows an LI for each comment', () => {
		expect(component.find('li').length).to.equal( props.comments.length );
	});

	it('shows each comment provided', () => {
		props.comments.map((item) => {
			return expect(component).to.contain(item);
		})
		// expect(component).to.contain('comment 1');
		// expect(component).to.contain('comment 2');
	});
});