/**@inject*/
const URL = 'http://www.mocky.io/v2/5a5ba1fc2c0000d31cee3a1c';

function TodoListService($http) {
    return {
        test: function() {
            $http.post(URL).then((res) => {
                console.log(res.data);
            })
        }
    }
};

export default TodoListService;