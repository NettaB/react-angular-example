/**@inject*/
const URL = 'https://www.mocky.io/v2/5a5cf9912e00000d239f84ab';

function TodoListService($http) {
    return {
        getTasks: function() {
            $http.get(URL).then((res) => {
                console.log(res);
                return res
            })
        }
    }
};

export default TodoListService;