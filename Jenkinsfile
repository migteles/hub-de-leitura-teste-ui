pipeline {
    agent any

    stages {
        stage('Instalação das dependencias') {
            steps {
                echo 'Instalando node...'
                bat 'npm install'
            }
        }

        stage('Execução dos testes') {
            parallel {
                stage('Testes no electron') {
                    steps {
                        bat 'npm run test-path1'
                    }
                }

                stage('Testes no chrome') {
                    steps {
                        bat 'npm run test-path2'
                    }
                }

                stage('Testes no firefox') {
                    steps {
                        bat 'npm run test-path3'
                    }
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