pipeline {
    agent any

    stages {

        stage("Clonar o hub de leitura") {
            steps {
                bat 'git clone https://github.com/migteles/hub-de-leitura-integrado.git'
            }
        }

        stage("Instalar as dependencias do projeto") {
            steps {
                dir('hub-de-leitura-integrado') {
                    bat 'npm install'
                    bat 'npm start'
                }
            }
        }


    }

    post {
        success {
            echo 'Build e testes executados com sucesso'
        }
        failure {
            echo 'Falha na execução do pipeline'
        }
    }    



}