import {
	SAVE_SITE_INFO,
	SAVE_INTRODUCTION,
	SAVE_COMMENT_RESULT,
	SET_COMMENT_QUERY_PAGE_NUM,
	SET_PARENT_COMMENT_ID,
	SET_COMMENT_FORM_EMPTY,
	SET_COMMENT_QUERY_PAGE,
	SET_COMMENT_QUERY_BLOG_ID,
	SET_IS_BLOG_RENDER_COMPLETE,
	SET_BLOG_PASSWORD_DIALOG_VISIBLE,
	SET_BLOG_PASSWORD_FORM
} from "./mutations-types";

import {getCommentListByQuery, submitComment} from "@/api/comment";
import {Message, Notification} from "element-ui";
import router from "../router";

export default {
	saveSiteInfo({commit}, siteInfo) {
		commit(SAVE_SITE_INFO, {siteInfo})
	},
	saveIntroduction({commit}, introduction) {
		commit(SAVE_INTRODUCTION, {introduction})
	},
	getCommentList({commit, rootState}) {
		//密码保护的文章，需要发送密码验证通过后保存在localStorage的Token
		// const blogToken = window.localStorage.getItem(`blog${rootState.commentQuery.blogId}`)
		//如果有则发送博主身份Token
		const adminToken = window.sessionStorage.getItem('adminToken')
		const token = adminToken ? adminToken : ''
		getCommentListByQuery(token, rootState.commentQuery).then(res => {
			console.log(res)
			commit(SAVE_COMMENT_RESULT, res.data)
		})
	},
	/*setCommentQueryPage({commit}, page) {
		commit(SET_COMMENT_QUERY_PAGE, {page})
	},*/
	setCommentQueryBlogId({commit}, blogId) {
		commit(SET_COMMENT_QUERY_BLOG_ID, {blogId})
	},
	setCommentQueryPageNum({commit}, pageNum) {
		commit(SET_COMMENT_QUERY_PAGE_NUM, {pageNum})
	},
	setParentCommentId({commit}, parentCommentId) {
		commit(SET_PARENT_COMMENT_ID, {parentCommentId})
	},
	setCommentFormEmpty({commit}) {
		commit(SET_COMMENT_FORM_EMPTY)
	},
	submitCommentForm({rootState, dispatch}, token) {
		let form = {...rootState.commentForm}
		// form.page = rootState.commentQuery.page
		form.blogId = rootState.commentQuery.blogId
		form.parentCommentId = rootState.parentCommentId
		submitComment(token, form).then(res => {
			if (res.code == 200) {
				Notification({
					title: res.msg,
					type: 'success'
				})
				dispatch('setParentCommentId', -1)
				dispatch('setCommentFormEmpty')
				dispatch('getCommentList')
			} else {
				Notification({
					title: '评论失败',
					message: res.msg,
					type: 'error'
				})
			}
		}).catch(() => {
			Notification({
				title: '评论失败',
				message: '异常错误',
				type: 'error'
			})
		})
	},
	setIsBlogRenderComplete({commit}, ok) {
		commit(SET_IS_BLOG_RENDER_COMPLETE, {ok})
	},
	goBlogPage({commit}, blog) {
		router.push(`/blog/${blog.id}`)
	},
}