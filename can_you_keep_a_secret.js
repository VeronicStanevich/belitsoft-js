function createSecretHolder(secret) {
    return {
        getSecret(){
            return secret;
        },
        setSecret(a){
            return secret = a;
        }
    };
}