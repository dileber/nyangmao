/**
 * Created by jing on 2016/8/11.
 */
export const naviGoBack = (navigator) => {
    if (navigator && navigator.getCurrentRoutes().length > 1) {
        navigator.pop();
        return true;
    }
    return false;
};
