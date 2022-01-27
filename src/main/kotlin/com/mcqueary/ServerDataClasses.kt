package com.mcqueary

import kotlinx.serialization.Serializable

@Serializable
data class Sticky(val author: String, val body: String, val created: Long)