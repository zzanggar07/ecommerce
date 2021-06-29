import axios from "axios";
import {api} from "@src/Constants";

export const Method = {
    POST: "POST",
    GET: "GET",
    PUT: "PUT",
    DELETE: "DELETE"
};

export const upload = (component:any, file:string, path:string, success:any, fail:any) => {
    const proc = async () => {
        try {
            const headers = {};
            // headers["Content-Type"] = "application/x-www-form-urlencoded";
            headers["Content-Type"] = "multipart/form-data";

            // tslint:disable-next-line:variable-name
            const access_token = localStorage.getItem("access_token");
            if (access_token !== undefined && access_token !== "") {
                headers["Authorization"] = "Bearer " + access_token;
            }

            const contents = {
                method: Method.POST,
                url: api + "/image/upload",
                headers
            };

            const formData = new FormData();
            formData.append("profileImage", file);
            formData.append("path", path);

            console.log("path", path);

            // const formData = {
            //     profileImage: file
            // };

            contents["data"] = formData;
            const response = await axios(contents);

            CommonResult(response.data);
            if (success !== undefined) {
                success(response.data);
            }
        } catch (e) {
            console.log("e : " + e);
            if (fail !== undefined) {
                fail(e);
            } else {
                NetworkFail(e);
            }
        }
    };

    proc().then(r => console.log(r));
};

/**
 * 공통 통신 처리 부분
 */
export const send = (component:any, method:any, url:string, params:any, success:any, fail:any, headers:any) => {
    const proc = async () => {
        try {
            if (headers === undefined) {
                headers = {};
                headers["Content-Type"] = "application/json";

                // tslint:disable-next-line:variable-name
                const access_token = localStorage.getItem("access_token");
                if (access_token !== undefined && access_token !== "") {
                    // tslint:disable-next-line:variable-name
                    // localStorage.getItem("token_type");
                    headers["Authorization"] = "Bearer " + access_token;
                }
                // console.log("access_token", access_token);
            }

            // headers["Access-Control-Allow-Origin"] = "*";

            console.log("params1", params);
            console.log("params2", JSON.stringify(params));

            const contents = {
                method,
                url: api + url,
                headers
            };

            if (method === "GET") {
                contents["params"] = params;
                contents["paramsSerializer"] = (paramObj: { [x: string]: string; }) => {
                    // tslint:disable-next-line:no-shadowed-variable
                    const params = new URLSearchParams();
                    // tslint:disable-next-line:forin
                    for (const key in paramObj) {
                        params.append(key, paramObj[key]);
                    }

                    return params.toString();
                };
            } else {
                contents["data"] = params;
            }

            const response = await axios(contents);

            CommonResult(response.data);

            if (success !== undefined) {
                success(response.data);
            }
        } catch (e) {
            console.log("e : " + e);

            if (fail !== undefined) {
                fail(e);
            } else {
                NetworkFail(e);
            }
        }
    };

    proc().then(r => console.log(r));
};

const CommonResult = (response: any) => {
    console.log(JSON.stringify(response));

    // if (response["access_token"] !== undefined) localStorage.setItem("access_token", response["access_token"]);
    // if (response["refresh_token"] !== undefined) localStorage.setItem("refresh_token", response["refresh_token"]);
    // if (response["token_type"] !== undefined) localStorage.setItem("token_type", response["token_type"]);
    // if (response["expires_in"] !== undefined) localStorage.setItem("expires_in", response["expires_in"]);
};

const NetworkFail = (response: { message: string | string[] | undefined; response: { data: any; }; }) => {
    console.log("response", JSON.stringify(response));
    if (response.message !== undefined && response.message.indexOf("code 401") !== -1) {
        // this.props.history.push("/auth/signout");

        // window.location = window.location.origin + "/auth/signout";
        localStorage.setItem("role", "");
        // @ts-ignore
        window.location = window.location.origin;
    } else {
        alert("ERROR : " + JSON.stringify(response.response.data));
    }
    // alert("네트워크 연결 실패 : " + JSON.stringify(response));
};
