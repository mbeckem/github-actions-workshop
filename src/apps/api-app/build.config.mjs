import { defineBuildConfig } from "@open-pioneer/build-support";

export default defineBuildConfig({
    services: {
        TextApiExtension: {
            provides: "integration.ApiExtension",
            references: {
                textService: "api-app.TextService"
            }
        },
        TextService: {
            provides: "api-app.TextService"
        },
        SecondApiExtension: {
            provides: "integration.ApiExtension"
        }
    },
    ui: {
        references: ["api-app.TextService", "integration.ExternalEventService"]
    }
});
