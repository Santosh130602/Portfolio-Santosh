

import websites from "../consts/websites"

export default {
    get(target, name) {
        switch (name) {
            case "emailRaw":
                return target.email
            case "linkedinTag":
                return target.linkedin.tag
            case "linkedin":
                return `https://${websites.linkedin}${target.linkedin.id}`
            case "discord":
                return `https://${websites.discord}${target.discord.id}`
            case "discordTag":
                return target.discord.tag
            default:
                const base = name === "email" ? "" : `https://${websites[name] ?? ""}`
                return `${base}${target[name] ?? ""}`
        }
    }
}
