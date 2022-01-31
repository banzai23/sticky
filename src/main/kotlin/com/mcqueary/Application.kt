package com.mcqueary

import com.mcqueary.plugins.*
import io.ktor.http.*
import io.ktor.server.application.*
import io.ktor.server.plugins.*

fun main(args: Array<String>): Unit =
	io.ktor.server.netty.EngineMain.main(args)

@Suppress("unused") // application.conf references the main function. This annotation prevents the IDE from marking it as unused.
fun Application.module() {
	install(CORS) {
		host("localhost:3000")
		host("0.0.0.0:3000")
		header(HttpHeaders.ContentType)
	}
	configureRouting()
	configureSerialization()
}
