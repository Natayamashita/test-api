<template>
    <form class="bg-zinc-600 w-96">
        <h1>
            User Register:
        </h1>
        <label for="fname">First name:</label><br>
        <input type="text" id="fname" name="fname" value="John" class="text-black"><br>
        <label for="lname">Last name:</label><br>
        <input type="text" id="lname" name="lname" value="Doe" class="text-black"><br><br>
        <input type="submit" value="Submit" @click="">
    </form>
</template>
<script>
    export default {
        methods: {
            register() {
                const userData = {
                    username: 'exampleUser',
                    password: 'examplePassword',
                    email: 'user@example.com'
                };

                fetch('http://localhost:3000/registerUser', {
                method: 'POST', // O método de requisição é POST, pois estamos enviando dados para o servidor
                headers: {
                    'Content-Type': 'application/json', // Dizemos que o conteúdo será em JSON
                },
                body: JSON.stringify(userData), // Convertendo os dados do usuário para uma string JSON
                })
                .then(response => {
                    if (!response.ok) {
                    // Se a resposta não for bem-sucedida (status HTTP diferente de 2xx), lança um erro
                    throw new Error('Falha ao registrar usuário');
                    }
                    return response.json(); // Parse a resposta como JSON
                })
                .then(data => {
                    console.log('Usuário registrado com sucesso:', data); // Lida com os dados retornados
                })
                .catch(error => {
                    console.error('Erro ao registrar usuário:', error); // Lida com erros de rede ou da API
                });
            }
        }
    }
</script>
<style>
    form { 
        color: white;
        font-family: monoscape;
        padding: 2px
    }
</style>