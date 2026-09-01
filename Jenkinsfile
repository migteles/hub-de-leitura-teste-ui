pipeline {
    agent any

    stages {
        
        stage('Clonar o hub de leitura') {
            steps {
                deleteDir()
                bat '''
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

        stage('Clonar o projeto de testes')
            steps {
                bat '''
                    git clone https://github.com/migteles/hub-de-leitura-teste-ui.git
                '''
            }
        
        stage('Instalar as dependencias dos testes')
            steps {
                dir('hub-de-leitura-teste-ui') {
                    bat 'call npm install'
                }
            }

        stage('Rodar os testes automatizados') {
            steps {
                dir('hub-de-leitura-teste-ui') {
                    bat 'call npm run test-path1'
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