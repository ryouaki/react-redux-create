import { ACTION_GET_MESSAGE } from './index';

export function actionMain(articleId) {
    return {
        type: ACTION_GET_MESSAGE,
        data: {
            message: "Hello , I am Ryouaki!",
            author: "ryouaki(46517115@qq.com)",
            contact: "WeChat: lianghui086343"
        }
    };
}