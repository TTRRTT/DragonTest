#include <drogon/HttpResponse.h>
#include <drogon/drogon.h>

int main()
{
    drogon::app()
        .addListener("0.0.0.0", 8080)
        .setDocumentRoot("./frontend/build")
        .registerHandler("/api/login",
            [](const drogon::HttpRequestPtr &req,
                  std::function<void(const drogon::HttpResponsePtr&)> &&callback)
            {
                std::string username = (*req->getJsonObject())["username"].asString();
                std::string password = (*req->getJsonObject())["password"].asString();

                Json::Value json;
                if (username == "admin" && password == "1234")
                    json["status"] = "success";
                else
                    json["status"] = "error";

                auto response = drogon::HttpResponse::newHttpJsonResponse(json);
                callback(response);
            }, { drogon::Post })
        .run();

    return 0;
}
