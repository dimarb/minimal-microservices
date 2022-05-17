import _ from '../../config/global.js'
export default {
    orion: {
        node1: {
            publicKey: "wI5Sift6aDAHa37s6IHByGqWhQqMBH6EUNV9bmmnyCw="
        },
        node2: {
            publicKey: "AgjYt4X29jhbbTB+nphMa069xMeXEhZlBDoojqprwVg="
        },
        node3: {
            publicKey: "fkDJKc6flhYcBgjUl84oleHI84uR6J6YaFCX+UTWMic="
        }
    },
    besu: {
        node1: {
            url: _.URL_RCP,
            wsUrl: "ws://member1besu:8546",
            privateKey:
                _.PK_NODE1
        },
        node2: {
            privateKey:
                _.PK_NODE2
        },
        node3: {
            privateKey:
                _.PK_NODE3
        }
    }
};
