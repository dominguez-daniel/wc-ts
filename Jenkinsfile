pipeline {
  agent any
  tools { 
    nodejs "18.3.0" 
  }
  stages {
    stage('Build') {
      steps {
        echo 'Running build automation'
        sh 'npm version'
        // sh 'npm install'
        // sh 'npm run build'
        // archiveArtifacts artifacts: 'build/'
      }
    }
  }
}
