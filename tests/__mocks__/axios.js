var axios = jest.fn();

axios.resolvesOnce = function(returnValue) {
	axios.mockReturnValueOnce(Promise.resolve(returnValue));
	return axios;
};

module.exports = axios;
