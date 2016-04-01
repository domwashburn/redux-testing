import React from 'react';
import { connect } from 'react-redux';

const CommentList = (props) => {
	const list = props.comments.map( item => <li key={item}>{item}</li>)
	return (
		<ul className="comment-list">{list}</ul>
	);
};
function mapStateToProps(state) {
	return { comments: state.comments };
}
export default connect(mapStateToProps)(CommentList);