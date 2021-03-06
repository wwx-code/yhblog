import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../views/Home";
import Login from "../views/Login";
import Dashboard from "../views/dashboard/Dashboard";
import WriteBlog from "../views/blog/blog/WriteBlog";
import BlogList from "../views/blog/blog/BlogList";
import CategoryList from "../views/blog/category/CategoryList";
import CommentList from "../views/blog/comment/CommentList";
import WriteMoment from "../views/blog/moment/WriteMoment";
import MomentList from "../views/blog/moment/MomentList";
import TagList from "../views/blog/tag/TagList";
import About from "../views/page/about/About";
import FriendList from "../views/page/friend/FriendList";
import ExceptionLog from "../views/log/exceptionLog/ExceptionLog";
import LoginLog from "../views/log/loginLog/LoginLog";
import OperationLog from "../views/log/operationLog/OperationLog";
import VisitLog from "../views/log/visitLog/VisitLog";


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/login',
    },
    {
        path: '/login',
        component: Login,
        meta: {
            title: '后台管理登录'
        }
    },
    {
        path: '/home',
        component: Home,
        redirect: '/dashboard',
        children: [
            {
              path: '/dashboard',
              component: Dashboard,
              meta: {
                title: '仪表盘'
              }
            },
            {
                path: '/blogs/write',
                component: WriteBlog,
                meta: {
                    title: '写文章'
                }
            },
            {
                path: '/blogs/edit/:id',
                component: WriteBlog,
                meta: {
                    title: '编辑文章'
                }
            },
            {
                path: '/moments/write',
                component: WriteMoment,
                meta: {
                    title: '写动态'
                }
            },
            {
                path: '/moments/edit/:id',
                component: WriteMoment,
                meta: {
                    title: '编辑动态'
                }
            },
            {
                path: '/blogs',
                component: BlogList,
                meta: {
                    title: '文章管理'
                }
            },
            {
                path: '/moments',
                component: MomentList,
                meta: {
                    title: '动态管理'
                }
            },
            {
                path: '/categories',
                component: CategoryList,
                meta: {
                    title: '分类管理'
                }
            },
            {
                path: '/tags',
                component: TagList,
                meta: {
                    title: '标签管理'
                }
            },
            {
                path: '/comments',
                component: CommentList,
                meta: {
                    title: '评论管理'
                }
            },
            {
                path: '/about',
                component: About,
                meta: {
                    title: '关于我'
                }
            },
            {
                path: '/friends',
                component: FriendList,
                meta: {
                    title: '友链管理'
                }
            },
            {
                path: '/operationLog',
                component: OperationLog,
                meta: {
                    title: '操作日志'
                }
            },
            {
                path: '/loginLog',
                component: LoginLog,
                meta: {
                    title: '登录日志'
                }
            },
            {
                path: '/exceptionLog',
                component: ExceptionLog,
                meta: {
                    title: '异常日志'
                }
            },
            {
                path: '/visitLog',
                component: VisitLog,
                meta: {
                    title: '访问日志'
                }
            },
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
