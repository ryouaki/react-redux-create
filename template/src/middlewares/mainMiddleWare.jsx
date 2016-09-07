export const errorChecker = store => next => action => {
    let oldData = store.getState();
    let newData = action.data;
    console.log("Get new Data from action: " + newData);
    return next(action);
}