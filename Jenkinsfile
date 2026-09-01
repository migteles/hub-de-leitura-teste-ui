pipeline {
    agent any

    stages {

        stage("Clonar o hub de leitura") {
            steps {
                deleteDir()
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

        stage("Rodar os testes automatizados") {
            steps {
                dir('hub-de-leitura-teste-ui') {
                    bat 'npm run test-path1'
                }
            }
        }
    }

    post {
        always {
            bat 'taskkill /F /IM node.exe || exit 0'
        }
    }    

}