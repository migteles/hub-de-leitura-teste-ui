pipeline {
    agent any
    tools { nodejs "nodejs"}

    stages {
        stage('Clonar o hub de leitura') {
            steps {
                bat '''
                    if exists hub-de-leitura-integrado rmdir /s /q hub-de-leitura-integrado
                    git clone https://github.com/migteles/hub-de-leitura-integrado.git
                '''
            }
        }

        stage('Instalar as dependencias do projeto') {
            steps {
                dir('hub-de-leitura-integrado') {
                    bat '''
                        call npm install
                        start /B npm start
                    '''
                }
            }
        }

        stage('Clonar o projeto de testes') {
            steps {
                bat '''
                    if exists hub-de-leitura-teste-ui rmdir /s /q hub-de-leitura-teste-ui
                    git clone https://github.com/migteles/hub-de-leitura-teste-ui.git
                '''
            }
        }

        stage('Instalar as dependencias dos testes') {
            steps {
                dir('hub-de-leitura-teste-ui') {
                    bat 'call npm install'
                }
            }
        }

        stage('Rodar os testes automatizados') {
            steps {
                dir('hub-de-leitura-teste-ui') {
                    bat 'call npm test'
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